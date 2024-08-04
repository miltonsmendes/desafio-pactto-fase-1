import { SearchBar } from "../../components/SearchBar";

import { ContainerPacttosChats, ContainerTitleBar, ContainerSearchStatus } from "./styles";

export function PacttosChats() {

        return (
          <ContainerPacttosChats>
            <div>
                <ContainerTitleBar>
                    <h1>Pacttos (Chats)</h1>
                </ContainerTitleBar>
                <ContainerSearchStatus>
                  <div>
                    <p>No Pacttos found</p>
                  </div>
                </ContainerSearchStatus>
                <div>
                    <SearchBar />
                </div>
            </div>
      
          </ContainerPacttosChats>
        )
      }