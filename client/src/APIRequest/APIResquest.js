import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import axios from "axios";
import {setToken, setUserDetails} from "../helper/SessionHelper";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";

const BaseURL= "http://localhost:8000/api/v1"
export function LoginRequest(email,password){
    // debugger
    store.dispatch(ShowLoader())
    // debugger
    let URL=BaseURL+"/login";
    let PostBody={"email":email,"password":password}
    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['user']);
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}