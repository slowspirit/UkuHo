document.querySelector('#list_of_chords1').addEventListener('change', exploreSelection);
document.querySelector('#list_of_chords2').addEventListener('change', exploreSelection);
document.querySelector('.selectBtn').addEventListener('click', exploreSelection);
document.querySelector('.hideBtn').addEventListener('click', hideChord);
document.querySelector('.copyBtn').addEventListener('click', copying);
document.querySelector('.refreshBtn').addEventListener('click', refreshing);

document.querySelector('.refreshBtn').style.display = 'none';

function refreshing() {
    document.querySelector('.safezone').innerText = '';
    document.querySelector('.refreshBtn').style.display = 'none';
}


function exploreSelection() {
    document.querySelector('.hideBtn').removeAttribute("disabled", "disabled");
    document.querySelector('.selectBtn').removeAttribute("disabled", "disabled");
    let selectedMeaning1 = document.getElementById('list_of_chords1');
    let selectedMeaning2 = document.getElementById('list_of_chords2');
    let wholeChordName = 'chord_' + selectedMeaning1.value + selectedMeaning2.value;
    let area = document.getElementById('showedChord');


    if (wholeChordName !== 'chord_' && (selectedMeaning1.value !== '' && selectedMeaning2 !== '')) {
        area.innerHTML = chordsArray[wholeChordName];
        area.style.display = 'inline';
        document.querySelector('.copyBtn').removeAttribute("disabled", "disabled");
    } else if (wholeChordName == 'chord_' && (selectedMeaning1.value == '' && selectedMeaning2.value == '')) {
        area.innerHTML = 'Please, choose the chord';
        document.querySelector('.hideBtn').setAttribute("disabled", "disabled");
        document.querySelector('.copyBtn').setAttribute("disabled", "disabled");
        document.querySelector('.selectBtn').setAttribute("disabled", "disabled");
    } else {
        area.innerHTML = 'Oops!<br>Such chord dose not exist';
        document.querySelector('.copyBtn').setAttribute("disabled", "disabled");
        document.querySelector('.selectBtn').setAttribute("disabled", "disabled");
    }
    return chordsArray[wholeChordName];
}

function hideChord() {
    let hiddenElement = document.getElementById('showedChord');
    hiddenElement.innerText = 'Please, choose the chord';
    document.querySelector('.hideBtn').setAttribute("disabled", "disabled");
    document.querySelector('.copyBtn').setAttribute("disabled", "disabled");
}

function copying() {
    if (exploreSelection() !== undefined) {
        let safezone = document.getElementById('safezone');
        let copiedElement = document.createElement('span');
        copiedElement.innerHTML = exploreSelection();
        safezone.appendChild(copiedElement);
        document.querySelector('.refreshBtn').style.display = 'inline-block';
    }
}