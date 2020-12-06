import React from 'react';
import GoogleMapReact from 'google-map-react';

function Marker({ text }) {
    return (
        <div className='marker__relative' >
            <div className='marker__absolute' >
                <div className='marker__absolute-afterAndBefore' >
                    <div className='marker__absolute-before' >
                        <p><span>Համայնք՝</span> ԱՐԹԻԿ</p>
                        <p><span>Հասցե՝</span> Ազատության 22/2</p>
                    </div>
                    <div className='marker__absolute-after' ></div>
                </div>
            </div>
        </div>
    );
};

function Map() {
    return (
        <div className='reservedPoints__contant-map' >
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBAkaAKUEQP9jtlhRqnpN8-4-wIWsyzwMM'}}
                defaultCenter={{ lat: 40.177200, lng: 44.503490 }}
                defaultZoom={8}
            >
                <Marker
                    lat={40.177200}
                    lng={44.503490}
                    text="Yerevan"
                />
            </GoogleMapReact>
        </div>
    );
};

export default Map;