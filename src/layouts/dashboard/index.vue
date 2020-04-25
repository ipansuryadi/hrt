<template>
  <section>
    <div
      class="sticky"
      style="z-index:42; top:1rem; cursor:pointer"
      :style="reduce ? 'margin-left:68px' : 'margin-left:268px'"
      @click="reduce = !reduce"
    >
      <span class="icon absolute has-background-white rounded-full">
        <i
          class="fas fa-lg"
          :class="reduce ? 'fa-chevron-circle-right' : 'fa-chevron-circle-left'"
        ></i>
      </span>
    </div>
    <b-sidebar
      position="fixed"
      :mobile="'reduce'"
      :expand-on-hover="expandOnHover"
      :reduce="reduce"
      :fullheight="true"
      open
    >
      <div class="p-3 pr-5">
        <aside class="menu">
          <div class="border-b-2 mb-3 pb-3">
            <horti-label-sidebar :reduce="reduce" fontColor="text-white" />
          </div>
          <ul class="menu-list">
            <li v-for="(menu, menuIndex) in menus" :key="menuIndex">
              <a
                :class="activeMenu === menu.name && 'is-active'"
                @click="menuClicked(menu.name, menu.subMenu !== undefined)"
              >
                <div class="flex flex-column items-center">
                  <span class="flex-initial">
                    <figure class="image is-24x24">
                      <img :src="getImg(menu.icon)" />
                    </figure>
                  </span>
                  <span class="flex-1 pl-2">{{ menu.label }}</span>
                  <template v-if="menu.subMenu !== undefined">
                    <span class="icon" v-show="!reduce">
                      <i
                        :class="
                          expanded === 'ekspor-impor'
                            ? 'fas fa-chevron-up'
                            : 'fas fa-chevron-down'
                        "
                      ></i>
                    </span>
                  </template>
                </div>
              </a>
              <transition name="zoom-fade">
                <template v-if="menu.subMenu !== undefined">
                  <ul v-show="expanded === menu.name">
                    <li
                      v-for="(subMenu, subMenuIndex) in menu.subMenu"
                      :key="subMenuIndex"
                    >
                      <a
                        :class="activeSubMenu === subMenu.name && 'is-active'"
                        @click="subMenuClicked(subMenu.name)"
                      >
                        <div class="flex flex-column items-center">
                          <span class="flex-initial">
                            <figure class="image is-24x24">
                              <img
                                src="https://bulma.io/images/placeholders/32x32.png"
                              />
                            </figure>
                          </span>
                          <span class="flex-1 pl-2">{{ subMenu.label }}</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </template>
              </transition>
            </li>
            <div class="py-3">
              <div class="border-b-2"></div>
            </div>
            <li>
              <a>
                <div class="flex flex-column items-center">
                  <span class="flex-initial">
                    <figure class="image is-24x24">
                      <img :src="getImg('user.png')" />
                    </figure>
                  </span>
                  <span class="flex-1 pl-2 text-gray-700 font-medium"
                    >Ridwan Ahmad Ma'arif</span
                  >
                </div>
              </a>
            </li>
            <li>
              <a>
                <div class="flex flex-column items-center">
                  <span class="flex-initial">
                    <figure class="image is-24x24">
                      <span class="icon text-gray-700" v-show="!reduce">
                        <i class="fas fa-lg fa-info-circle"></i>
                      </span>
                    </figure>
                  </span>
                  <span class="flex-1 pl-2 text-gray-700 font-medium"
                    >Pusat Informasi</span
                  >
                </div>
              </a>
            </li>

            <li>
              <a @click="$router.push('/')">
                <div class="flex flex-column items-center">
                  <span class="flex-initial">
                    <figure class="image is-24x24">
                      <img :src="getImg('sign-out.png')" />
                    </figure>
                  </span>
                  <span class="flex-1 pl-2 text-gray-700 font-medium"
                    >Sign Out</span
                  >
                </div>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </b-sidebar>
    <div class="flex">
      <div :style="reduce ? 'width:80px' : 'width:280px'"></div>
      <div class="flex-1">
        <div class="px-6 py-4">
          <!-- <transition name="zoom-fade" mode="out-in"> -->
          <router-view :key="reduce" />
          <!-- </transition> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HortiLabelSidebar from "../../components/HortiLabelSidebar";
export default {
  components: {
    HortiLabelSidebar
  },
  data() {
    return {
      reduce: false,
      activeMenu: "dashboard",
      activeSubMenu: "dashboard",
      expanded: "",
      menus: [
        {
          label: "Dashboard",
          name: "dashboard",
          icon: "dashboard.png"
        },
        {
          label: "Harga",
          name: "harga",
          icon: "harga.png"
        },
        {
          label: "Ekspor Impor",
          name: "ekspor-impor",
          icon: "ekspor-impor.png",
          subMenu: [
            {
              label: "Ekspor",
              name: "ekspor"
            },
            {
              label: "Impor",
              name: "impor"
            },
            {
              label: "Neraca",
              name: "neraca"
            }
          ]
        },
        {
          label: "Perlindungan",
          name: "perlindungan",
          icon: "perlindungan.png"
        }
      ]
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
    },
    getImg(image) {
      return require("../../assets/" + image);
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
<style lang="css">
div.sidebar-content {
  background-image: linear-gradient(to bottom, #1eb2a6, #87e5bb);
}
.menu-list a.is-active {
  background-color: #f67575;
  color: #fff;
  font-weight: bold;
}
.menu-list a {
  color: #fff;
  border-radius: 8px;
}
.menu-list a:hover {
  opacity: 0.9;
}
</style>
