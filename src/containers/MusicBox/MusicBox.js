import './MusicBox.css';
import { useEffect, useState } from 'react';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import MusicList from '../../components/MusicList/MusicList';

import { numOfResults, genreOptions } from '../../data/dropDownOptions';

const MusicBox = props => {
    const [musicData, setMusicData] = useState([])
    const [numberOfResults, setNumberOfResults] = useState(10);

    useEffect(() => {
            fetchAll(numberOfResults)
    }, [numberOfResults]);



    const fetchAll = numOfRes => {
        console.log('res', 'MusicBox.js', 'line: ', '34');
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=${numOfRes}/json`)
            .then( res => {
                return res.json();
            })
            .then(data => {
                setMusicData(data.feed.entry);
            });
    };



    return (
        <div className="MusicBox">
            <DropDownMenu title="Num of Results" optionsArr={numOfResults} onChange={setNumberOfResults} defaultValue="10"/>
            <hr/>
            <MusicList musicData={musicData}/>
        </div>
    );
};

export default MusicBox;