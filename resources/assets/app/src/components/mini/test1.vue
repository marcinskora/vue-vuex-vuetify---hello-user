<template>
    <div>
        <v-carousel v-model="model">
            <v-carousel-item
              v-for="(color, i) in colors"
              :key="color"
            >
              <v-sheet
                :color="color"
                height="100%"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="text-h2">
                    Slide {{ i + 1 }}
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          |----- {{ postTitle }} -----|
          <button @click="fetchData">fetch data</button>
    </div>
</template>

<script>

  export default {
    data () {
      return {
        model: 0,
        colors: [],
      }
    },
    props: {
        postTitle: String
    },
    created() {
        var _this = this;
        setTimeout(()=> {
            _this.colors = [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ];
        },2000);
    },
    methods: {
        fetchData(event) {
            alert('sssssssssssssss');
          this.$emit("clicked", "some fetched data");
        }
      }
  }
</script>