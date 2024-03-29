import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: '',
    };

    shouldComponentUpdate(nextProps, nextState) {
        let should = false;
        if( this.state !== nextState) {
            should = true;
            console.log(should);
            return should;
        } else {
            should =  this.props.info !== nextProps.info;
            console.log(should);
            return should
        }

    }


    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        //true -> false
            //onUpdate
        //false -> true
            //state에 info 값을 넣어주기
        const {info, onUpdate} = this.props;
        if(this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        } else {
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }

        this.setState({
            editing: !this.state.editing,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const {name, phone} = this.props.info;
        const {editing} = this.state;
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        console.log(name);

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div>
                                <input
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </div>
                            <div>
                                <input
                                    name="phone"
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div><b>{phone}</b></div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    {
                        editing ? '적용' : '수정'
                    }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;