<template>
  <div :id="svgId" class="svg-container"></div>
</template>

<script>
import indonesiaMap from "../assets/indonesiaMap";
const colors = [
  "#f67575",
  "#ffa34d",
  "#fec936",
  "#87e5bb",
  "#1eb2a6",
  "#ebebeb",
  "#ffffff"
];
export default {
  name: "VenueMapComponent",
  data: function() {
    return {
      svgId: "indonesiaMap",
      mapAttr: {
        viewBoxWidth: 810,
        viewBoxHeight: 340,
        imageWidth: 810,
        imageHeight: 340
      },
      svgContainer: null
    };
  },
  mounted: function() {
    this.generateVenueMap();
  },
  methods: {
    generateVenueMap: function() {
      const vue = this;
      const mapData = indonesiaMap.g.path;
      const svgContainer = vue
        .$svg("indonesiaMap")
        .size("100%", "100%")
        .viewbox(0, 0, vue.mapAttr.viewBoxWidth, vue.mapAttr.viewBoxHeight);
      vue.svgContainer = svgContainer;
      mapData.forEach(pathObj => {
        vue.generatePath(svgContainer, pathObj);
      });
    },
    generatePath: function(svgCont, pathObj) {
      const vue = this;

      const attrs = {
        fill: colors[Math.floor(Math.random() * 7)],
        stroke: "gray",
        "stroke-width": 1,
        title: pathObj["-title"],
        "map-id": pathObj["-id"]
      };
      const element = svgCont.path(pathObj["-d"]).attr(attrs);
      element.click(function() {
        const mapId = this.node.attributes["map-id"].value;
        const title = this.node.attributes["title"].value;
        vue.$emit("map-clicked", { mapId, title });
      });
      element.addClass("pink-flower");
    }
  }
};
</script>
<style lang="css">
.pink-flower:hover {
  fill-opacity: 0.8;
  stroke: black;
}
</style>
