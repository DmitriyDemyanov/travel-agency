<template>
  <button class="main-button" :class='[`size-${size}`,`color-${color}`,`type-${type}`]' @click='$emit("mainBtn")'>
    <slot name='prepend'></slot>
    <span v-show="title" class="fz-14" :class='{ "prepend-icon": $slots.prepend,"append-icon": $slots.append }'>{{ title
    }}</span>
    <slot name='append'></slot>
  </button>
</template>

<script>
export default {
  name: 'MainButtonComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'common',
    },
    color: {
      type: String,
      default: 'common',
    },
    type: {
      type: String,
      default: 'common',
    }
  },
}
</script>

<style lang='scss' scoped>
.main-button {
  height: 48px;
  background-color: var(--brand-color);
  font-weight: 500;
  font-size: 14px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    background-color: transparent;
  }

  &.type-bordered {
    border: 1px solid var(--brand-color);
    background-color: transparent;

    &:hover {
      background-color: var(--brand-color);
    }
  }

  &.type-transparent {
    background-color: transparent;
    color: #fff;
    font-weight: 700;
    transition: all 0.3s;

    &:hover {
      color: var(--accent-color);
    }
  }

  &.type-revers-transparent {
    background-color: transparent;
    color: var(--main-color-font);
    font-weight: 700;
    transition: all 0.3s;

    &:hover {
      color: var(--accent-color);
    }
  }

  .prepend-icon {
    padding-left: 5px;
  }

  .append-icon {
    padding-right: 5px;
  }
}

.size-full {
  width: 100%;
}

.color-light {
  background-color: #fff;

  &:hover {
    background-color: var(--accent-color);
  }
}

.color-dark {
  background-color: var(--main-color-font);
  color: #fff;

  &:hover {
    background-color: var(--accent-color);
  }
}
</style>