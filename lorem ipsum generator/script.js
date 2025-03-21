const tagOptions = [
    "pre", "h5", "h3",
    "h4", "img", "h1",
    "footer","body"
];


const optionsContainer =document.querySelector(".options");
const outputContainer =document.querySelector(".output");
const tagsSelect =document.getElementById("tags");
const paragraphsSlider =document.getElementById(
        "paragraphs"
    );
const wordsSlider =document.getElementById("words");
const paragraphsValue =document.getElementById(
        "paragraphsValue"
    );
const wordsValue =document.getElementById(
        "wordsValue"
    );

function createOptionsUI() {

    tagOptions.forEach((tag) => {
        const option =
            document.createElement(
                "option"
            );
        option.value = tag;
        option.textContent = `<${tag}>`;
        tagsSelect.appendChild(option);
    });

    paragraphsSlider.addEventListener(
        "input",
        updateParagraphsValue
    );
    wordsSlider.addEventListener(
        "input",
        updateWordsValue
    );

    const generateButton =
        document.getElementById(
            "generate"
        );
    generateButton.addEventListener(
        "click",
        generateLoremIpsum
    );
}

function updateParagraphsValue() {
    paragraphsValue.textContent =
        paragraphsSlider.value;
}


function updateWordsValue() {
    wordsValue.textContent =
        wordsSlider.value;
}

function generateLoremIpsum() {
    const paragraphs = parseInt(
        paragraphsSlider.value
    );
    const tag =
        document.getElementById(
            "tags"
        ).value;
    const includeHtml =
        document.getElementById(
            "include"
        ).value;
    const wordsPerParagraph = parseInt(
        wordsSlider.value
    );

    const loremIpsumText = generateText(
        paragraphs,
        tag,
        includeHtml,
        wordsPerParagraph
    );
    displayLoremIpsum(loremIpsumText);
}

function generateText(
    paragraphs,
    tag,
    includeHtml,
    wordsPerParagraph
) {
    
    const placeholderText =
        `Lorem ipsum dolor sit amet 
        consectetur adipiscing elit sed 
        do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.`;

    
    const loremIpsumArray = new Array(
        paragraphs
    ).fill("");

    for (
        let i = 0;
        i < paragraphs;
        i++
    ) {
        const words = generateWords(
            wordsPerParagraph
        );
        loremIpsumArray[i] =
            includeHtml === "Yes"
                ? `<${tag}>${words}</${tag}>`
                : words;
    }

    return loremIpsumArray.join("\n");
}

function generateWords(numWords) {
    
    const loremIpsumText =
        `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna 
        aliqua. Diam in arcu cursus euismod 
        quis viverra nibh. Nunc aliquet bibendum
        enim facilisis gravida neque convallis 
        a cras. Sagittis purus sit amet volutpat
        Consequat mauris. Duis ultricies lacus 
        sed turpis tincidunt id. Consequat interdum
        varius sit amet mattis vulputate. Enim sed
        faucibus turpis in eu. Ridiculus mus mauris
        vitae ultricies leo integer malesuada nunc vel.
        Nulla pharetra diam sit amet nisl suscipit.
        Lobortis elementum nibh tellus molestie nunc
        non blandit massa enim. Dis parturient montes
        nascetur ridiculus mus. Justo nec ultrices dui
        sapien eget. Enim tortor at auctor urna nunc.
        Dictumst quisque sagittis purus sit amet volutpat
        consequat mauris nunc.`;


    const words =
        loremIpsumText.split(" ");

    
    if (numWords <= words.length) {
        return words
            .slice(0, numWords)
            .join(" ");
    } else {
        return words.join(" ");
    }
}

function displayLoremIpsum(text) {
    outputContainer.innerHTML = text;
}

createOptionsUI();