const stylesheet = `
.react-jinke-music-player-main .music-player-panel svg {
    color: #333333;
}
.react-jinke-music-player-main .music-player-panel button:disabled svg {
    opacity: 0.3;
}
.react-jinke-music-player-main svg:active, 
.react-jinke-music-player-main svg:hover {
    color: #D32E53; /* Terracotta hover */
}
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle, 
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track {
    background-color: #2ED3AE; /* Celadon primary */
}
.react-jinke-music-player-main ::-webkit-scrollbar-thumb,
.react-jinke-music-player-mobile-progress .rc-slider-handle, 
.react-jinke-music-player-mobile-progress .rc-slider-track {
    background-color: #2ED3AE;
}
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle:active {
    box-shadow: 0 0 4px #2ED3AE;
}
.audio-lists-panel-content .audio-item.playing,
.react-jinke-music-player-main .audio-item.playing svg,
.react-jinke-music-player-main .group player-delete {
    color: #2ED3AE;
}
.audio-lists-panel-content .audio-item:hover,
.audio-lists-panel-content .audio-item:hover svg,
.audio-lists-panel-content .audio-item:active .group:not([class=".player-delete"]) svg, 
.audio-lists-panel-content .audio-item:hover .group:not([class=".player-delete"]) svg {
    color: #D32E53;
}
.react-jinke-music-player-main .audio-item.playing .player-singer {
    color: #2ED3AE !important;
}
.react-jinke-music-player-main .lyric-btn-active svg{
    color: #2ED3AE !important;
}
.react-jinke-music-player-main .lyric-btn-active {
    color: #D32E53 !important;
}
.react-jinke-music-player-main .loading svg {
    color: #2ED3AE !important;
}
.react-jinke-music-player .music-player-controller .music-player-controller-setting{
    background: rgba(46,211,174,0.25);
}
.react-jinke-music-player-main .music-player-lyric{
    color: #333333 !important;
    text-shadow: none;
}
.react-jinke-music-player-main .music-player-panel,
.react-jinke-music-player-mobile,
.ril__outer{
    background-color: #FAF7F2; /* Off-white background */
    border: 1px solid rgba(0,0,0,0.08);
}
.ril__toolbarItem{
    font-size: 100%;
    color: #333333;
}
.audio-lists-panel,
.ril__toolbar{
    background-color: #FFFFFF;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 6px 6px 0 0;
}
.react-jinke-music-player-main .music-player-panel .panel-content .img-rotate,
.react-jinke-music-player-mobile .react-jinke-music-player-mobile-cover img.cover,
.react-jinke-music-player-mobile-cover {
    border-radius: 8px !important;
    animation-duration: 0s !important;
}
.react-jinke-music-player-main .music-player-panel .panel-content .img-content{
    width: 60px;
    height: 60px;
}
.react-jinke-music-player-main .songTitle{
    color: #333333;
}
.react-jinke-music-player .music-player-controller{
    color: #2ED3AE;
}
.audio-lists-panel-mobile .audio-item:not(.audio-lists-panel-sortable-highlight-bg){
    background: unset;
}
.lastfm-icon, 
.musicbrainz-icon{
    color: #333333;
}
`
export default stylesheet
