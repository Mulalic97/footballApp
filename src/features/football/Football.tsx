import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFootballApi} from "./footballSlice";


export function Football() {

    //@ts-ignore
    const footballData = useSelector(state => state.football)
    console.log({footballData})
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchFootballApi())

    }, [])

    // @ts-ignore
    const items = footballData?.data.length > 0 && footballData?.data.map((item: any) => {
        return <div style={{display: "flex", flexDirection: "column", justifyContent: "center", margin: "10px 0"}}>
            <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>

                <a href={item.matchviewUrl}>
                    <div style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        backgroundImage: `url(${item.thumbnail})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        marginRight: "13px"
                    }}/>
                </a>
                <h3>

                    {item?.title ?? "/"}
                </h3>

            </div>

            <span>{item?.competition ?? "/"}</span>

        </div>
    })

    return (<>

        <div className='container'>

            {items}


        </div>

    </>)


}