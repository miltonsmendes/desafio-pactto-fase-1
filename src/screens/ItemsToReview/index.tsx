import { SearchBar } from "../../components/SearchBar";

import { ContainerItemsToReview, ContainerTitleBar, ContainerSearchStatus } from "./styles";

export function ItemsToReview() {

        return (
          <ContainerItemsToReview>
            <div>
                <ContainerTitleBar>
                    <h1>There are no review requests sent to you</h1>
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
      
          </ContainerItemsToReview>
        )
      }