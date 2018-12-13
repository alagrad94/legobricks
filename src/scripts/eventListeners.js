const eventListeners = {
    handleFormSubmission () {
        const creator = document.getElementById("lego__creator").value;
        const name = document.getElementById("lego__name").value;
        const shape = document.getElementById("lego__shape").value;
        const color = document.getElementById("lego__color").value;

        const legoObject = {
            Creator: creator,
            Nme: name,
            Shape: shape,
            Color: color
        }

        data.postLego(legoObject);
    },

    // handleDeleteButton () {

    // }
}