import React,{Component} from "react";
import GoogleLogout from 'react-google-login';

function uploadFile(file) {

  fetch('https://ramansubmission.herokuapp.com/uploader', {
    // content-type header should not be specified!
    method: 'POST',
    body: file,
  }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
}

class Upload extends Component{
  onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        fetch('/uploader', {
            method: 'post',
            body: formData
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
    };
    filePathset(e) {
        e.stopPropagation();
        e.preventDefault();
        var file = e.target.files[0];
        console.log(file);
        this.setState({ file });
    
        console.log(this.state.file);
      }
  render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                        /*<div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                            <input type="file" className="form-control" name="file" onChange={() => uploadFile()}/>
                        </div>*/
                        //<form action = "http://localhost:5000/uploader" method = "POST" enctype = "multipart/form-data">
                            <input type = "file" name = "file" />
                            <input type = "submit" onClick = {() => uploadFile()}/>
                        //</form>  
                </div>
            </div>
        </div>
    )
  }
}

export default Upload;