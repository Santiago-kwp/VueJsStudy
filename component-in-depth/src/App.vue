<script setup>
import { ref } from "vue";
import AppPropsLiteral from "./components/props/AppPropsLiteral.vue";
import AppPropsObject from "./components/props/AppPropsObject.vue";
import ComponentEmitEventTemplate from "./components/props/ComponentEmitEventTemplate.vue";
import ComponentEmitEventScriptSetup from "./components/props/ComponentEmitEventScriptSetup.vue";
import MenuBar from "./components/props/MenuBar.vue";
const view = ref("");
const menus = ref([
  { key: "literal", label: "Props Literal Demo" },
  { key: "object", label: "Props Object Demo" },
  { key: "template", label: "Event Template Demo" },
  { key: "script", label: "Event Script Setup Demo" },
]);
const updateView = (key) => {
  view.value = key;
};
</script>

<template>
  <div class="container">
    <MenuBar :menus="menus" :view="view" @update-view="updateView" />

    <AppPropsLiteral v-if="view === 'literal'" view-title="좋아하는 과일은?" />
    <AppPropsObject
      v-if="view === 'object'"
      view-title="좋아하는 과일은? (Object 데이터 전달)"
    />
    <ComponentEmitEventTemplate
      v-if="view === 'template'"
      view-title="인사해요"
    />
    <ComponentEmitEventScriptSetup
      v-if="view === 'script'"
      view-title="인사해요(스크립트 활용)"
    />
  </div>
</template>
<style scoped>
.container {
  text-align: center;
}
.menu {
  margin: 0.3rem 0;
}
button {
  margin: 0.2rem;
  padding: 0.5rem;
}
.active {
  background-color: steelblue;
  color: aliceblue;
  border: 0;
  border-radius: 5px;
}
</style>
