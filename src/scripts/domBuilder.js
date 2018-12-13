const domBuilder = {
    appendInputForm () {
        let colors = ["Red", "Green", "Yellow", "Blue", "Orange", "Black"]
        let inputForm = `
        <article>
        <fieldset>
        <label for="lego__creator">Creator:</label>
        <input id="lego__creator" name="lego__creator" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego__name">Name:</label>
        <input id="lego__name" name="lego__name" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego__shape">Shape:</label>
        <input id="lego__shape" name="lego__shape" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego__color">Color:</label>
        <select id="lego__color">
        <option value="${colors[0]}">${colors[0]}</option>
        <option value="${colors[1]}">${colors[1]}</option>
        <option value="${colors[2]}">${colors[2]}</option>
        <option value="${colors[3]}">${colors[3]}</option>
        <option value="${colors[4]}">${colors[4]}</option>
        <option value="${colors[5]}">${colors[5]}</option>
        </select>
        </fieldset>
        <button class="btn lego__save">Save Lego Creation</button>
        <button class="btn lego__delete">Delete Lego</button>
        </article>`

        let dispalyContainer = document.querySelector("#display-container");
        dispalyContainer.innerHTML = inputForm;
    }
}