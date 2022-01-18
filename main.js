document.querySelector('#list_of_chords1').addEventListener('change', exploreSelection);
document.querySelector('#list_of_chords2').addEventListener('change', exploreSelection);
document.querySelector('.selectBtn').addEventListener('click', exploreSelection);
document.querySelector('.hideBtn').addEventListener('click', hideChord);
document.querySelector('.copyBtn').addEventListener('click', copying);

function exploreSelection() {
    let selectedMeaning1 = document.getElementById('list_of_chords1');
    let selectedMeaning2 = document.getElementById('list_of_chords2');
    let wholeChordName = 'chord_' + selectedMeaning1.value + selectedMeaning2.value;
    // console.log(wholeChordName);
    let area = document.getElementById('showedChord');

    if (wholeChordName !== 'chord_' && (selectedMeaning1.value !== '' && selectedMeaning2 !== '')) {
        area.innerHTML = chordsArray[wholeChordName];
        area.style.display = 'inline';
    } else if (wholeChordName == 'chord_' && (selectedMeaning1.value == '' && selectedMeaning2.value == '')) {
        area.innerHTML = 'Please, choose the chord';
    } else {
        area.innerHTML = 'Oops!<br>Such chord does not exist';
    }
    return chordsArray[wholeChordName];
}

function hideChord() {
    let hiddenElement = document.getElementById('showedChord');
    // console.log(hiddenElement);
    hiddenElement.innerHTML = 'Please, choose the chord';
}

function copying() {
    if (exploreSelection() !== undefined) {
        let safezone = document.getElementById('safezone');
        let copiedElement = document.createElement('span');
        copiedElement.innerHTML = exploreSelection();
        safezone.appendChild(copiedElement);
        // console.log(exploreSelection());
    }
}
