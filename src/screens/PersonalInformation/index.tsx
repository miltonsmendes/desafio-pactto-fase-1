import { GeneralInput } from "../../components/GeneralInput";
import { DropdownInput } from "../../components/DropdownInput";

import {  } from "./styles";

export function PersonalInformation() {
  const options = ['a', 'b', 'c', 'd']

  return (
    <>
     <div>
      <GeneralInput />
     </div>
     <div>
      <GeneralInput />
     </div>
     <div>
      <GeneralInput />
     </div>
      <br />
     <div>
      <DropdownInput options={options}/>
     </div>

     <div>
      <p>What is your main activity? Or activities</p>
      <ui>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ui>
     </div>

     <div>
        <p>User handle and password</p>
        <div>
          <GeneralInput />
        </div>
        <div>
          <GeneralInput />
        </div>
     </div>

    <div>
      <p>To delete your Pactto account and remove your data permanently from all Pactto apps and services, please click here.</p>
    </div>
     

  
    </>

  )
}