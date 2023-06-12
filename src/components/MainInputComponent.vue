<template>
  <section class="wrapper-input">
    <label class="label-input fz-14" for="main-input">{{ labelText }}</label>
    <input
      :class='`type-${type}`'
      :placeholder="`${placeholder}`"
      :value="value"
      class="main-input fz-16"
      type="text"
      name="main-input"
      @input="onInput($event)"
    >
    <div class="append-slot" @click="onClickIcon">
      <slot name="append"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainInputComponent",
  data() {
    return {
    };
  },
  props: {
    labelText:   {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onClickIcon() {
      console.log("!onClickIcon$");
    },
    onInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang='scss' scoped>
.wrapper-input {
  position: relative;
}

.label-input {
  background-color: #fff;
  padding:          0 4px;
  position:         absolute;
  top:              -25%;
  transform:        translateY(25%);
  left:             16px;
  font-weight:      500;
  font-size:        14px;
}

.main-input {
  width:         100%;
  height:        56px;
  padding:       0 37px 0 16px;
  color:         #1C1B1F;
  background:    #FFFFFF;
  border:        1px solid #79747E;
  border-radius: 4px;

  &:focus-visible {
    outline: #79747E;

  }

}

.append-slot {
  position:  absolute;
  top:       50%;
  transform: translateY(-50%);
  right:     17px;
}

.type-no-bordered {
  border: none;
}
</style>
