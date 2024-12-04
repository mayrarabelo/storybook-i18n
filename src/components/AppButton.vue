<template>
  <q-btn
    :color="props.color"
    :label="props.label"
    :size="props.size"
    :text-color="props.textColor"
    @click="onClick"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { QBtn } from 'quasar';

type Colors = 'white' | 'primary' | 'secondary';
type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props {
  label?: string;
  color: Colors;
  size: Sizes;
  textColor?: string;
}

const text = ref('text');

const props = withDefaults(defineProps<Props>(), {
  label: 'Button',
  color: 'primary',
  size: 'md',
  textColor: '',
});

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const onClick = () => {
  emit('click', 1);
};
</script>
