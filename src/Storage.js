import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { storage } from './firebase-config';
import { v4 } from 'uuid'

const Storage = () => {
    // This usestate here is to store image file and then upload it
    const [imageUpload,setImageUpload] = useState(null);
    const [imageList , setImageList] = useState([]);

    const uploadImage = async () => {
        if(imageUpload === null) return;
        const imageRef =ref(storage,`images/${imageUpload.name + v4()}`)
//  See two images may have same name in database so uuid v4 method help them to distinguish
        const uploadedImg = await uploadBytes(imageRef,imageUpload);
        const url = await uploadedImg.getDownloadURL(uploadImage.ref);
        setImageList((prev) => [...prev,url]);
    }

// This is the reference for , where are all the files
    const imageListRef = ref(storage,"images/");
    useEffect(() => {
        const getData = async () => {
            const res = await listAll(imageListRef);
            console.log(res.items);
            res.items.forEach(async (item) => {
                const url = await getDownloadURL(item);
                setImageList((prev) => [...prev,url]);
            })
        }
        getData();
    },[])


  return (
    <>
     <div className="App">
        <input
         type="file"
        onChange={(e)=>setImageUpload(e.target.files[0])}
         />
        <button onClick={uploadImage}> Upload Image</button>
     </div> 
     {imageList.map((url) => {
        return <img src={url} key={url+`${Math.random()}`}
                height="300px" width="300px"

        />
     })}
    </>
  )
}

export default Storage
