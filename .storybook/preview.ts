import "./preview.css";
import type { Preview } from "@storybook/vue3";
import { themes } from "@storybook/theming";

const preview: Preview = {
    parameters: {
        docs: {
            theme: themes.dark
        }
    }
};

export default preview;
