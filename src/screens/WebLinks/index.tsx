import { SearchBar } from "../../components/SearchBar";

import { ContainerWebLinks, ContainerTitleBar, ContainerSearchStatus } from "./styles";

export function WebLinks() {

  return (
    <>
      <ContainerWebLinks>
        <div>
          <ContainerTitleBar>
            <h1>There are no public web links you created</h1>
          </ContainerTitleBar>
          <ContainerSearchStatus>
            <div>
              <p></p>
            </div>
          </ContainerSearchStatus>
          <div>
            <SearchBar />
          </div>
        </div>

      </ContainerWebLinks>

      <ContainerWebLinks>
        <div>
          <ContainerTitleBar>
            <h1>There are no private web links you created</h1>
          </ContainerTitleBar>
          <ContainerSearchStatus>
            <div>
              <p></p>
            </div>
          </ContainerSearchStatus>
          <div>
            <SearchBar />
          </div>
        </div>

      </ContainerWebLinks>
    </>

  )
}