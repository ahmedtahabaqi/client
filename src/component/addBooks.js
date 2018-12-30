import React, { Component } from "react";
import Context from "./context.js";
import axios from "axios";
import { FilePicker } from "evergreen-ui";
import FormData from "form-data";
class AddBooks extends Component {
    constructor() {
        super();
        this.state = {
  
                bookname: "",
                author: "",
                year: "",
                pages: "",
                language: "",
                fileSize: "",
                fileFormat: "",
                description: "",
                category: "",
                pdf:"",
                img:''
        };
    }
    onChangeBookName = value => {
        this.setState({
            bookname: value
        });
    };
    onChangeAuthor = value => {
        this.setState({
            author: value
        });
    };
    onChangeyear = value => {
        this.setState({
            year: value
        });
    };
    onChangepages = value => {
        this.setState({
            pages: value
        });
    };
    onChangelanguage = value => {
        this.setState({
            language: value
        });
    };
    onChangefileSize = value => {
        this.setState({
            fileSize: value
        });
    };
    onChangefileFormat = value => {
        this.setState({
            fileFormat: value
        });
    };
    onChangedescription = value => {
        this.setState({
            description: value
        });
    };
    onChangecategory = value => {
        this.setState({
            category: value
        });
    };
    onChangeimg = value => {
        this.setState({
            img: value[0]
        });
    };
    onChangepdf = value => {
        this.setState({
            pdf: value[0]
        });
    };
    onadd = () => {
        let formData = new FormData();
        formData.append("bookname", this.state.bookname);
        formData.append("author", this.state.author);
        formData.append("year", this.state.year);
        formData.append("pages", this.state.pages);
        formData.append("language", this.state.language);
        formData.append("fileSize", this.state.fileSize);
        formData.append("fileFormat", this.state.fileFormat);
        formData.append("description", this.state.description);
        formData.append("category", this.state.category);
        formData.append("img", this.state.img);
        formData.append("pdf", this.state.pdf);

        axios({
          url: `https://safe-spire-61819.herokuapp.com/book/`,
          method: "POST",
          data: formData
      })
            .then(response => {
                console.log(response.data);
                window.location.href = '/'
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div className="mainAdd">
                            <div className="AddContiner" />
                            <article className="AddContiner0">
                                <div className="AddContiner1">
                                    <input
                                        placeholder="Name of Book"
                                        onChange={e => {
                                            this.onChangeBookName(e.target.value);
                                        }}
                                    />
                                    <input
                                        placeholder="Author"
                                        // value={this.state.newbook.author}
                                        onChange={e => {
                                            this.onChangeAuthor(e.target.value);
                                        }}
                                    />
                                    <input
                                        placeholder="Year"
                                        // value={this.state.newbook.year}
                                        onChange={e => {
                                            this.onChangeyear(e.target.value);
                                        }}
                                    />
                                    <input
                                        placeholder="Pages"
                                        // value={this.state.newbook.pages}
                                        onChange={e => {
                                            this.onChangepages(e.target.value);
                                        }}
                                    />
                                    <input
                                        placeholder="language"
                                        // value={this.state.newbook.language}
                                        onChange={e => {
                                            this.onChangelanguage(e.target.value);
                                        }}
                                    />
                                    <input
                                        placeholder="File Size"
                                        // value={this.state.newbook.fileSize}
                                        onChange={e => {
                                            this.onChangefileSize(e.target.value);
                                        }}
                                    />
                                    <input
                                        placeholder="File Format"
                                        // value={this.state.newbook.fileFormat}
                                        onChange={e => {
                                            this.onChangefileFormat(e.target.value);
                                        }}
                                    />
                                    <input
                                        placeholder="Category"
                                        // value={this.state.newbook.category}
                                        onChange={e => {
                                            this.onChangecategory(e.target.value);
                                        }}
                                    />
                                    <FilePicker
                                        name="img"
                                        multiple
                                        width="30%"
                                        placeholder="please input image..."
                                        marginBottom={32}
                                        // value={this.state.newbook.img}
                                        onChange={files => this.onChangeimg(files)}
                                    />
                                </div>
                                <div className="AddContiner2">
                                    <textarea
                                        name="comment"
                                        placeholder="description"
                                        // value={this.state.newbook.description}
                                        onChange={e => {
                                            this.onChangedescription(e.target.value);
                                        }}
                                    />
                                    
                                    <FilePicker
                                        name="pdf"
                                        multiple
                                        width="30%"
                                        placeholder="please input pdf..."
                                        // value={this.state.newbook.pdf}
                                        onChange={files => this.onChangepdf(files)}
                                    />
                                   

                                    <button onClick={this.onadd.bind(this)}>save</button>
                                </div>
                            </article>
                        </div>
                    );
                }}
            </Context.Consumer>
        );
    }
}
export default AddBooks;


