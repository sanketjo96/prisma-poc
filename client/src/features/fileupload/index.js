import React, { Component } from 'react';
import FileUploadControl from './fileUploadControl';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        'marginTop': '5rem',
        display: 'flex',
        justifyContent: 'center',
    },
    controller: {
        width: '50rem'
    },
    progress: {
        marginTop: '3rem'
    }
};

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            dataChunk: null
        }
    }

    getFileData = (fileData) => {
        console.log(fileData);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.controller}>
                    <FileUploadControl
                        handleFileData={this.getFileData}>
                    </FileUploadControl>
                    {
                        this.fileData 
                        && (
                            <div className={classes.progress}>
                                <LinearProgress variant="determinate" value={this.state.progress} />
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(FileUpload);