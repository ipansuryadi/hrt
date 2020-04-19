<template>
  <section>
    <b-sidebar
      position="fixed"
      :mobile="'reduce'"
      :expand-on-hover="expandOnHover"
      :reduce="reduce"
      :fullheight="true"
      type="is-primary"
      open
    >
      <div class="p-3">
        <aside class="menu">
          <!-- <p class="menu-label">
            General
          </p> -->
          <ul class="menu-list">
            <li>
              <a
                :class="activeMenu === 'dashboard' && 'is-active'"
                @click="menuClicked('dashboard')"
              >
                <div class="flex flex-column items-center">
                  <span class="flex-initial">
                    <figure class="image is-24x24">
                      <img
                        class="is-rounded"
                        src="https://bulma.io/images/placeholders/32x32.png"
                      />
                    </figure>
                  </span>
                  <span class="flex-1 pl-2">Dashboard</span>
                </div>
              </a>
            </li>
            <li>
              <a
                :class="activeMenu === 'produksi-terkini' && 'is-active'"
                @click="menuClicked('produksi-terkini', true)"
              >
                <div class="flex flex-column items-center">
                  <span class="flex-initial">
                    <figure class="image is-24x24">
                      <img
                        class="is-rounded"
                        src="https://bulma.io/images/placeholders/32x32.png"
                      />
                    </figure>
                  </span>
                  <span class="flex-1 pl-2">Produksi Terkini</span>
                  <span class="icon" v-show="!reduce">
                    <i
                      :class="
                        expanded === 'produksi-terkini'
                          ? 'fas fa-chevron-up'
                          : 'fas fa-chevron-down'
                      "
                    ></i
                  ></span>
                </div>
              </a>
              <ul v-show="expanded === 'produksi-terkini'">
                <li>
                  <a
                    :class="activeSubMenu === 'produksi-terkini' && 'is-active'"
                    @click="subMenuClicked('produksi-terkini')"
                  >
                    <div class="flex flex-column items-center">
                      <span class="flex-initial">
                        <figure class="image is-24x24">
                          <img
                            class="is-rounded"
                            src="https://bulma.io/images/placeholders/32x32.png"
                          />
                        </figure>
                      </span>
                      <span class="flex-1 pl-2">Dashboard</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
    </b-sidebar>

    <div
      class="absolute"
      style="z-index:42; top:1rem; cursor:pointer"
      :style="reduce ? 'left:63px' : 'left:243px'"
      @click="reduce = !reduce"
    >
      <span class="icon is-medium absolute has-background-white rounded-full">
        <i
          class="fas fa-lg"
          :class="reduce ? 'fa-chevron-circle-right' : 'fa-chevron-circle-left'"
        ></i>
      </span>
    </div>
    <div class="flex">
      <div :style="reduce ? 'width:80px' : 'width:260px'"></div>
      <div class="flex-1">
        <div class="p-5">
          <transition name="zoom-fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reduce: false,
      activeMenu: "dashboard",
      activeSubMenu: "dashboard",
      expanded: ""
    };
  },
  methods: {
    menuClicked(menu, haveChild) {
      if (!haveChild) {
        this.$router.push({ name: menu });
      }
      this.activeMenu = menu;
      this.expanded = this.expanded === menu ? "" : menu;
    },
    subMenuClicked(subMenu) {
      this.$router.push({ name: subMenu });
      this.activeSubMenu = subMenu;
    }
  }
};
</script>

<style lang="scss">
/* ZOOM FADE */
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: transform 0.35s, opacity 0.28s ease-in-out;
}
.zoom-fade-enter {
  transform: scale(0.97);
  opacity: 0;
}

.zoom-fade-leave-to {
  transform: scale(1.03);
  opacity: 0;
}
@media screen and (max-width: 1023px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini-mobile {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
