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
            endBetweenPages: 10,
            activePage: 1
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
        if(prevState.startBetweenPages !== this.state.startBetweenPages) {
            this.setState({...this.state, pages: []})
            this.setPages()
        }
    }

    onPrevClickHandler = () => {
        this.setState(state => ({
            ...this.state, 
            startBetweenPages: state.startBetweenPages - 10 < 1 ? 1 : state.startBetweenPages - 10,
            endBetweenPages: state.endBetweenPages - 10 <= 10 ? 10 : Math.ceil((state.endBetweenPages - 10) / 10) * 10
        }))
    }

    onNextClickHandler = () => {
        this.setState(state => ({
            ...this.state, 
            startBetweenPages: state.startBetweenPages + 10 >= state.countPages ? 
                Math.ceil((state.countPages - 10) / 10) * 10 : state.startBetweenPages + 10,
            endBetweenPages: state.endBetweenPages + 10 >= state.countPages ? 
                state.countPages : state.endBetweenPages + 10
        }))
    }

    render() {
        return (
            <div className={style.pagination__container}>
                {this.state.startBetweenPages > 1 && 
                    <NavigationBtn text={'prev'} onClickHandler={this.onPrevClickHandler} />}
                <ul className={style.list}>
                    {this.state.pages.map(page => <div key={page}>{page}</div>)}
                </ul>
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
    activePage: PropTypes.number
}

export default Pagination;