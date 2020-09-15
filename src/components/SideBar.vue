<template>
  <div class="sidebar">
    <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>
    <b-sidebar
      id="sidebar-variant"
      title="Sidebar"
      bg-variant="dark"
      text-variant="light"
      shadow
    >
      <div class="px-3 py-2">
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item href="/#/upload" @click="hide">
              <b-icon icon="folder-plus"></b-icon>Add Audio
            </b-nav-item>
            <!-- <b-nav-item href="/#/transcribe">Transcribe</b-nav-item> -->
            <b-nav-item href="/#/transcriptions" @click="hide">
              <b-icon icon="clipboard-plus"></b-icon>Transcriptions
            </b-nav-item>
            <b-nav-item href="/#/files" @click="hide">
              <b-icon icon="file"></b-icon>Audio Files
            </b-nav-item>
            <b-nav-item active @click="hide">
              <b-icon icon="headphones"></b-icon>Transcribe
            </b-nav-item>
            <b-nav-item href="#" @click="hide">
              <b-icon icon="laptop"></b-icon>Dashboard
            </b-nav-item>
            <b-nav-item href="#link-2" @click="hide">
              <b-icon icon="box-arrow-right"></b-icon>Logout
            </b-nav-item>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  name: "SideBar"
};
</script>
