import { GeneralButton } from "../../components/GeneralButton";
import { SearchBar } from "../../components/SearchBar";

import { ContainerHome, ContainerUnderlined, ContainerUploadTitleBar } from "./styles";

export function Home() {

        return (
          <ContainerHome>
            <div>
                <p>Hey Milton , welcome to Pactto!</p>
                <p>Open your inbox and verify your email</p>
                <p>Check the <ContainerUnderlined>short video of Pactto in action</ContainerUnderlined></p>
                <p>Wanna record your computer screen or review files? Download Pactto for <ContainerUnderlined>Mac</ContainerUnderlined> or <ContainerUnderlined>Windows</ContainerUnderlined></p>
                <p>Wanna review videos, images or audio files with your phone or tablet? Download Pactto for <ContainerUnderlined>iOS</ContainerUnderlined> or <ContainerUnderlined>Android</ContainerUnderlined></p>
            </div>
         
            <div>
                <ContainerUploadTitleBar>
                    <h1>My Uploads</h1><GeneralButton color='primary' text='+ UPLOAD NEW VIDEO' />
                </ContainerUploadTitleBar>
                <div>
                    <SearchBar />
                </div>
            </div>
      
          </ContainerHome>
        )
      }