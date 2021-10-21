export const getApiRoot = () => {
    const hashTag = window.location.hash;
    console.log('Hash tag '+ hashTag);

    let apiRoot = hashTag === '#local' 
                ? 'http://localhost:4567' 
                : 'https://dev.stedi.me';

    if (window.location.hostname.includes('easyrent-dev')){
        apiRoot = 'https://dev.stedi.me';
    } else if (window.location.hostname.includes('easyrent.citwdd.net')){
        apiRoot = 'https://stedi.me';
    }
    return apiRoot;
}