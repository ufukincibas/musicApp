import React from "react";
import {View , Text , Image} from 'react-native';
import styles from './SongCard.styles';

const songCard = (props) => {
    return(
    <View style={styles.container}>
       <Image style={styles.image}src={props.song.imageUrl}/>
        <View style={styles.inner_ontainer}>
            <Text style={styles.title} >{props.song.title}</Text>
                 <View style={styles.content_container}>
            <View style={styles.info_container}>
                <Text>{props.song.artist}</Text>
                <Text style={styles.year}>{props.song.year}</Text>
                </View>

                    {props.song.isSoldOut && (<View style={styles.soldoult_container}>
                         <Text style= {styles.soldout_title}>TÜKENDİ</Text>
                    </View>
                    )}
                        </View>
           
        </View>
    </View>
    )
}

export default songCard;