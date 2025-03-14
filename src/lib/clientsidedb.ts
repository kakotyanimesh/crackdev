const openDataBase = () : Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const dbReq = indexedDB.open("audiodatabase", 1)

        dbReq.onupgradeneeded = (evenet : IDBVersionChangeEvent) => {
            const db = (evenet.target as IDBOpenDBRequest).result

            if(!db.objectStoreNames.contains("audio")){
                db.createObjectStore("audio", {keyPath : "id"})
            }
        }

        dbReq.onsuccess = (event : Event) => {
            resolve((event.target as IDBOpenDBRequest).result)
        }

        dbReq.onerror = (event : Event) => {
            reject((event.target as IDBOpenDBRequest).error)
        }
    })
}



export const saveAndPlayAudio = async (audioBlob : Blob) : Promise<void> => {
    try {
        const db = await openDataBase()

        const audioID = `audio_id_${Date.now()}`

        await new Promise<void>((resolve, reject) => {
            const transcation = db.transaction(['audio'], 'readwrite')
            const store = transcation.objectStore('audio')
            const audioStoreReq = store.add({id : audioID, audio : audioBlob})

            audioStoreReq.onsuccess = () => resolve()
            audioStoreReq.onerror = () => reject(audioStoreReq.error)
        })


        const audioUrl = URL.createObjectURL(audioBlob)
        const audio = new Audio(audioUrl)
        audio.play()

        audio.addEventListener("ended", async () => {
            URL.revokeObjectURL(audioUrl)

            const transaction = db.transaction(['audio'], 'readwrite')
            const store = transaction.objectStore('audio')
            store.delete(audioID)
        })
    } catch (error) {
        console.log(`Error at playing and saving audio ${error}`);
        
    }
}


/**
 * the above function is for saving the audio file and playing it 
 * we have indexedDb in nodejs or in browser which is a client side database that can store text file audio file without any external datbase , this is different from localstorage or session storage as in both of we have to store kye value pair but indexedDB is like NOSQL DATABASE in client side
 * first in the opendatabase function we createa a database with onopen and after that we create a object store name audio where we are going to store objects like audios with keypath of id 
 * after that inside the audioplay and save fn we make sure to get the audio file as blob or binary object large data then save it to the indexeddb 
 * make a url from the audioblob and create a audio output with .play() we play the audio that is being created from ai
 * 
 * when audio play stopped we delete the audio from indexeddb database
 * 
 * by saving the audio to indexeddb after reloding or without internet the user can play the audio perfectly 
 */