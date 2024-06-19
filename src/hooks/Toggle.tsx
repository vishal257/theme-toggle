import { useEffect, useState } from "react"

const useToggle = (key: string, defaultValue:string) => {

  const [value, setValue] = useState(() => {
    let currentValue;
    try{
      currentValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue))
    }catch(error){
      console.log(error);
      currentValue = defaultValue;
    }finally{
      return currentValue;
    }
  })

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value])

  return [value, setValue];
}

export default useToggle
