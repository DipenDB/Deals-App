import React,{useState,useEffect} from 'react'
import {View,Text} from 'react-native'
import Geolocation from '@react-native-community/geolocation';


export const useLocation=()=>{
    const [location,setLocation]=useState({latitude:'',longitude:''})

    const getLocation= async ()=>{
        try {
            await Geolocation.getCurrentPosition((info)=>setLocation({latitude: info.coords.latitude,longitude: info.coords.longitude}));
        }
        catch (e) {
            console.log("Location error",e)
        }
        // coords.latitude longitude
    }

    useEffect(()=>{
        const l=getLocation();
    },[])

    return location
}

