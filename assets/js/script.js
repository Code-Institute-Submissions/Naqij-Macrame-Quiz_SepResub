//https://opentdb.com/api.php?amount=10&category=25&type=multiple

async function loadQuestion(){
    const APIUrl = 'https://opentdb.com/api.php?amount=10&category=25&type=multiple';
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    console.lod(data);
}

loadQuestion();