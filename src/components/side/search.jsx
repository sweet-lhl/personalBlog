import React from 'react';

class Search extends React.Component {

    render() {
        return (
            <div className="search">
                <form>
                    <input name="keyboard" id="keyboard" className="input_text" placeholder="请输入关键字词"
                           style={{color:'rgb(153, 153, 153)'}} type="text"/>
                    <input name="Submit" className="input_submit" value="搜索" type="submit"/>
                </form>
            </div>
        );
    }
}
export default Search;