const photoUrlInput = document.querySelector('#photoUrlInput');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextInput = document.querySelector('#bottomTextInput');
const generateBtn = document.querySelector('#generateBtn');
const memeForm = document.querySelector('#memeForm');
const memes = document.querySelector('#memes');
const appTitle = document.querySelector('#appTitle');
const appTitleText = 'Meme Generator';
const memeData = [];

appTitle.innerHTML = appTitleText;

generateBtn.addEventListener('click', function (evt) {
    event.preventDefault();
    const memeItem = {
        url: photoUrlInput.value,
        topText: topTextInput.value,
        bottomText: bottomTextInput.value,
    };
    memeData.push(memeItem);
    generateMeme();
})

function generateMeme() {
    memes.innerHTML = "";
    for (let index = 0; index < memeData.length; index++) {
        const photoUrlInput = document.createElement('img');
        const topTextInput = document.createElement('span');
        const bottomTextInput = document.createElement('span');
        const memeItem = memeData[index];
        const memeContainer = document.createElement('div');
        const deleteOverlay = document.createElement('div');
        const deleteSpan = document.createElement('span');

        deleteOverlay.className = 'deleteOverlay';

        deleteSpan.className = 'deleteIcon';
        deleteSpan.innerText = 'X';

        memeContainer.className = 'memeContainer';
        
        photoUrlInput.className = 'memeImg';
        photoUrlInput.dataIndex = index;
        photoUrlInput.src = memeItem.url;

        topTextInput.className = 'memeText topText';
        topTextInput.dataIndex = index;
        topTextInput.innerText = memeItem.topText;

        bottomTextInput.className = 'memeText bottomText';
        bottomTextInput.dataIndex = index;
        bottomTextInput.innerText = memeItem.bottomText;

        deleteOverlay.appendChild(deleteSpan);
        memeContainer.appendChild(photoUrlInput);
        memeContainer.appendChild(topTextInput);
        memeContainer.appendChild(bottomTextInput);
        memeContainer.appendChild(deleteOverlay);
        memes.appendChild(memeContainer);



    }
}

memeForm.addEventListener('click', function (evt) {
    const memeImg = evt.target.className === 'memeImg';
    const deleteOverlay = evt.target.className === 'deleteOverlay';
    const memeContainer = evt.target;
    const dataIndex = memeContainer.value;
    
    if (memeImg || deleteOverlay) {
        memeData.splice(dataIndex, 1);
    }
}
)