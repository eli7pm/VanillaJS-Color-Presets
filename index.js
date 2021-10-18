import "./assets/pspdfkit.js";

// We need to inform PSPDFKit where to look for its library assets, i.e. the location of the `pspdfkit-lib` directory.
const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;

const newColor = {
    color: new PSPDFKit.Color({r: 102, g:52, b:0}),
        localization: {
            id: "brown",
            defaultMessage: "Custom Brown",
            description: "custom brown"
        }

}
PSPDFKit.Options.COLOR_PRESETS = [
    {
        color: PSPDFKit.Color.BLACK,
        localization: {
            id: "black",
            defaultMessage: "black"
        }
    },
    {
        color: PSPDFKit.Color.GREEN,
        localization: {
            id: "green",
            defaultMessage: "green"
        }
    },
    {
        color: null,
        localization: {
            id: "transparent",
            defaultMessage: "Transparent"
        }
    },{
        color: PSPDFKit.Color.ORANGE,
        localization: {
            id: "orange",
            defaultMessage: "orange",
            description: "orange"
        }
    }
];

//Logging to the console the COLOR_PRESETS array to confirm if it has the custom colors
console.log("Colors Presets: ", PSPDFKit.Options.COLOR_PRESETS);

//Highlight works as expected
PSPDFKit.Options.HIGHLIGHT_COLOR_PRESETS = PSPDFKit.Options.HIGHLIGHT_COLOR_PRESETS.concat([newColor]);
//Note works as expected
PSPDFKit.Options.NOTE_COLOR_PRESETS = PSPDFKit.Options.NOTE_COLOR_PRESETS.concat([newColor]);


PSPDFKit.load({
    baseUrl,
    container: "#pspdfkit",
    document: "./assets/Document.pdf",
    enableHistory: true,
})
    .then(async instance => {
        console.log("PSPDFKit loaded", instance);
        console.log("PSPDFKit presets", PSPDFKit.Options.COLOR_PRESETS);
        // Signaturebinding(instance)
    })
    .catch(error => {

        console.error(error.message);
    });
/*
async function Signaturebinding(formFieldName){
// First get all `FormFields` in the `Document`.
    const formFields = await this.getFormFields();

// Get a signature form with the specific name you want.
    const field = formFields.find(
        (formField) =>
            formField.name === formFieldName &&
            formField instanceof PSPDFKitWeb.FormFields.SignatureFormField
    );
// Get the annotation ID for the widget the user sees.
    const annotationID = field.annotationIds.first();

////In this example, assume the widget you need is on the first page.
    const annotations = await this.getAnnotations(0);
    const formFieldsann = annotations.toJS();

// Find that widget.
    const widget = annotations.find(
        (annotation) =>
            annotation instanceof PSPDFKitWeb.Annotations.WidgetAnnotation &&
            annotation.formFieldName === formFieldName
    );
//get signature from localstorage and how to bind it with the widget that is my question?
    const signaturesString = localStorage.getItem(STORAGE_KEY);
    const storedSignatures = JSON.parse(signaturesString);
    storedSignatures[0].bbox = [30,100,75,200];
    const list = PSPDFKitWeb.Immutable.List(
        storedSignatures.map(PSPDFKitWeb.Annotations.fromSerializableObject)
    );
    this.create(list);
} */
