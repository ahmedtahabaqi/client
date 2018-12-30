import React from "react";
import Context from "./context.js";
import Component from "@reactions/component";
import { SideSheet } from "evergreen-ui";
import styled from "styled-components";

let ViewContainer = styled.main`
  background-color: #37314e;
  height: 100%;
  width: 100%;
`;
let SubView = styled.div`
  margin: 0px 30px;
  padding-top: 30px;
`;
let ViewContent = styled.div`
  display: flex;
  margin-top: 50px;
`;
let ImgView = styled.img`
  background-color: blue;
  height: 300px;
  width: 250px;
`;
let H3 = styled.h3`
  color: #fff;
  margin: 10px;
`;
let BtnView = styled.a`
  font-size: 1rem;
  height: 30px;
  width: 150px;
  background-color: #0080ff;
  border-radius: 15px;
  border: 0px;
  padding-left: 30px;
  cursor: pointer;
  color: white;
  margin: 10px;
  font-weight: bold;
  justify-content: flex-end;
`;

class ShowBooks extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
            <React.Fragment>
              <div className="abs">
                {ctx.value.map((item, i) => {
                  return (
                    <div className="main" key={item._id}>
                      <div className="showcontiner" />
                      <div className="showcontiner1">
                        <article className="book">
                          <img
                            height="124"
                            width="124"
                            src={
                              "https://safe-spire-61819.herokuapp.com/" +
                              item.img
                            }
                            alt="img"
                          />
                          <div className="contentcard">
                            <h3>{item.bookname}</h3>
                            <p>{item.description}</p>
                          </div>
                          <div className="showbtn">
                            <button
                              method="DELETE"
                              onClick={() => {
                                ctx.action.delet(item._id);
                              }}
                            >
                              Delete
                            </button>

                            <Component initialState={{ isShown: false }}>
                              {({ state, setState }) => (
                                <React.Fragment>
                                  <SideSheet
                                    isShown={state.isShown}
                                    onCloseComplete={() =>
                                      setState({ isShown: false })
                                    }
                                  >
                                    <ViewContainer>
                                      <SubView>
                                        <div>
                                          <ImgView
                                            src={
                                              "https://safe-spire-61819.herokuapp.com/" +
                                              item.img
                                            }
                                            alt="img"
                                          />
                                        </div>
                                        <ViewContent>
                                          <div>
                                            <H3>
                                              Author :{" "}
                                              <span>{item.author}</span>
                                            </H3>
                                            <H3>
                                              Year : <span>{item.year}</span>
                                            </H3>
                                            <H3>
                                              Pages : <span>{item.pages}</span>
                                            </H3>
                                            <H3>
                                              File Size :{" "}
                                              <span>{item.fileSize}</span>
                                            </H3>
                                            <H3>
                                              File Format :{" "}
                                              <span>{item.fileFormat}</span>
                                            </H3>
                                            <H3>
                                              Category :{" "}
                                              <span>{item.category}</span>
                                            </H3>
                                          </div>
                                          <BtnView
                                            href={
                                              "https://safe-spire-61819.herokuapp.com/" +
                                              item.pdf
                                            }
                                          >
                                            Download PDF
                                          </BtnView>
                                        </ViewContent>
                                      </SubView>
                                    </ViewContainer>
                                  </SideSheet>

                                  <button
                                    onClick={() => setState({ isShown: true })}
                                  >
                                    View
                                  </button>
                                </React.Fragment>
                              )}
                            </Component>
                          </div>
                        </article>
                      </div>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default ShowBooks;
