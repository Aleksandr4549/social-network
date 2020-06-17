import React from 'react';
import PropTypes from 'prop-types';

import NavigationBtn from '../Buttons/Navigation/NavigationBtn';
import style from './Pagination.module.scss';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [],
            countPages: Math.ceil(this.props.countItems / this.props.pageSize),
            startBetweenPages: 1,
            endBetweenPages: this.props.betweenSize,
            currentPage: this.props.currentPage
        }
    }

    setPages() {
        for(let i = this.state.startBetweenPages; i <= this.state.endBetweenPages; i++) {
            this.setState(state => ({...this.state, pages: [...state.pages, i]}))
        }
    }

    componentDidMount() {
        this.setPages()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.startBetweenPages !== this.state.startBetweenPages ) {
            this.setState({...this.state, pages: []})
            this.setPages()
        }
    }

    onPrevClickHandler = () => {
        this.props.onClickHandler(this.state.startBetweenPages)

        this.setState(state => ({
            ...this.state, 
            startBetweenPages: state.startBetweenPages - this.props.betweenSize < 1 ? 
                1 : state.startBetweenPages - this.props.betweenSize,
            endBetweenPages: state.endBetweenPages - this.props.betweenSize <= this.props.betweenSize ? 
                this.props.betweenSize : state.endBetweenPages >= state.countPages ?
                state.startBetweenPages - 1 : state.endBetweenPages - this.props.betweenSize
        }))
    }

    onNextClickHandler = () => {
        this.props.onClickHandler(this.state.startBetweenPages)

        this.setState(state => ({
            ...state, 
            startBetweenPages: state.startBetweenPages + this.props.betweenSize >= state.countPages ? 
                Math.ceil((state.countPages - this.props.betweenSize) / 10) * 10 : 
                state.startBetweenPages + this.props.betweenSize,
            endBetweenPages: state.endBetweenPages + this.props.betweenSize >= state.countPages ? 
                state.countPages : state.endBetweenPages + this.props.betweenSize
        }))
    }

    render() {
        return (
            <div className={style.pagination__container}>
                {this.state.startBetweenPages > 1 && 
                    <NavigationBtn text={'prev'} onClickHandler={this.onPrevClickHandler} />}

                <div className={style.list}>
                    {this.state.pages.map(page => (
                        <div 
                            key={page} 
                            onClick={(e) => this.props.onClickHandler(e.target.innerText)}>{page}
                        </div>
                    ))}
                </div>

                {this.state.endBetweenPages < this.state.countPages &&
                    <NavigationBtn text={'next'} onClickHandler={this.onNextClickHandler} />
                }
            </div>
        );
    }
};

Pagination.propTypes = {
    countItems: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    betweenSize: PropTypes.number.isRequired,
    onClickHandler: PropTypes.func.isRequired
}

export default Pagination;