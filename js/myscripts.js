// To display Modal
var overlay = document.getElementById('overlay');
var form = document.getElementById('form');

function openModal() {
    overlay.classList.remove("is-hidden");
}

function closeModal() {
    overlay.classList.add("is-hidden");
}



$(document).ready(function () {
    // // Hide if src is empty
    if ("storageImage" in localStorage) {
        document.getElementsByClassName("post-image")[0].style.display = "block";
        console.log("Data  found");
    } else {
        console.log("Data not found")
        document.getElementsByClassName("post-image")[0].style.display = "none";
    }

    // document.getElementById("writehere").innerHTML = localStorage.getItem("name");
    var dataImage = localStorage.getItem('storageImage');
    bannerImg = document.getElementById('table-banner');
    bannerImg.src = "data:image/png;base64," + dataImage;

    // To display hidden description
    $('.heading-title').on('click', function () {
        $(".modal-content").slideToggle();
        form.classList.add("form-hidden");
    })
});


// Open and close form 
function openModalForm() {
    form.classList.remove("form-hidden");
    document.getElementById("modal-content").style.display = "none";
}

function closeModalForm() {
    form.classList.add("form-hidden");
}


// Read image and display preview
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


//Take action when user submit data
var form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    // e.preventDefault()
    console.log("form submited.....")


    var x = Number(document.getElementById('numbers').value);
    const arrayOfDigits = Array.from(String(x), Number);

    const lengthOfDigit = arrayOfDigits.length
    console.log(lengthOfDigit);

    if (lengthOfDigit > 3 && lengthOfDigit < 7) {
        console.log("Length is correct")


        sum = 0;

        for (var i = 0, sum = 0; i < arrayOfDigits.length; i++) {
            sum += arrayOfDigits[i]
        }
        console.log("Sum :", sum)
        const digitOfSum = Array.from(String(sum), Number);
        console.log("Digit of sum :", digitOfSum);

        finalSum = 0;
        for (var i = 0, sum = 0; i < digitOfSum.length; i++) {
            finalSum += digitOfSum[i]
        }

        if (finalSum == 7) {
            localStorage.setItem('name', finalSum);

            img = document.getElementById('image').files[0]
            console.log("Images : ", img)

            // 
            const reader = new FileReader();
            reader.onloadend = () => {
                // convert file to base64 String
                const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
                // store file
                localStorage.setItem('storageImage', base64String);
            };
            reader.readAsDataURL(img);
            nameDisplayCheck();
            closeModalForm();
            alert("Data saved in localstorage");
        } else {
            alert("Fail to submit data");
            e.preventDefault();
        }

    } else {
        alert("Enters a number of 4-6 digits");
        e.preventDefault();
    }

    document.getElementById("numbers").value = "";
    document.getElementById("image").value = "";
    document.getElementById("blah").value = "";
})

function nameDisplayCheck() {
    // document.getElementById("writehere").innerHTML = localStorage.getItem("name");
    var dataImage = localStorage.getItem('storageImage');
    bannerImg = document.getElementById('table-banner');
    bannerImg.src = "data:image/png;base64," + dataImage;
}

// Confirm Delete 
function ConfirmDelete() {

    var x = confirm("Are you sure you want to delete?");
    if (x) {
        localStorage.removeItem('name');
        localStorage.removeItem('storageImage');
    } else {
        return false;
    }

}
