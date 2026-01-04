console.log("fronEnd Js ishga tushdi");

function itemTemplate(item) {
    return ` <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                    <span class="item-text">${item.reja}</span>
                        <div>
                            <button 
                                data-id="${item._id}"
                                class="edit-me btn btn-secondary btn-sm mr-1">Ozgartirish</button>
                            <button
                                data-id="${item._id }"
                                class="delete-me btn btn-danger btn-sm">Ochirish</button>
                        </div>
                </li>`

};



let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            console.log(response.data);
            document
                .getElementById("item-list")
                .insertAdjacentHTML("beforeend", itemTemplate(response.data));
            createField.value = "";
            createField.focus();
        })
        .catch((err) => {
            console.log("Iltimos qaytadan harakat qilib");
        });

});

document.addEventListener("click", function(e) {
    // delete oper 
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq ochirmoqchimisiz?")) {
            axios
                .post("/delete-item", { _id: e.target.getAttribute("data-id") })
                .then((response) => {
                    console.log(response);
                    e.target.parentElement.parentElement.remove();
                })
                .catch((err) => {
                    console.log("Xatolik yuz berdi");
                });
        }
    }
    //edit oper 
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("O'zgartirish kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if (userInput) {
            axios.post("/edit-item", {
                _id: e.target.getAttribute("data-id"),
                new_input: userInput,
            }).then(response => {
                console.log(response.data);
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            }).catch(err => { "Iltimos qaytadan harakat qilib" });
        }

    }

    //clean all
    document.getElementById("clean-all").addEventListener("click", function() {
        axios.post("/delete-all", { delete_all: true }).then(response => {
            alert(response.data.state);
            document.location.reload();
        })

    })

});