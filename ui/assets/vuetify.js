import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VMenu,
  VDivider,
  VSubheader,
  VTooltip,
  VTabs,
  VForm,
  VTextField,
  transitions
} from 'vuetify';

Vue.use(Vuetify, {
    components: {
      Vuetify,
      VApp,
      VNavigationDrawer,
      VFooter,
      VList,
      VBtn,
      VIcon,
      VGrid,
      VToolbar,
      VCard,
      VMenu,
      VDivider,
      VSubheader,
      VTooltip,
      VTabs,
      VForm,
      VTextField,
      transitions
    },
    theme: {
      primary: "#FFA000",
      secondary: "#FF6F00",
      accent: "#37474F",
      error: "#f44336",
      warning: "#FFD600",
      info: "#2962FF",
      success: "#64DD17"
    }
});