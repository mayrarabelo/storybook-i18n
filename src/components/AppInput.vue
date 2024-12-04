<template>
  <div id="app-input">
    <label class="rp-label type-body1 text-secondary-700" v-if="titleI18n">
      {{ titleI18n }}
    </label>
    <span
      class="required_field"
      v-if="props.mandatory && titleI18n && !props.conditionalMandatory"
      >*</span
    >
    <span class="required_field" v-if="props.conditionalMandatory && titleI18n"
      >**</span
    >
    <span class="field-optional" v-if="props.optional && !props.mandatory">{{
      'Campo opicional'
    }}</span>
    <q-input
      v-model="inputValue"
      ref="inputValueRef"
      :filled="props.disable"
      :outlined="!props.disable"
      :label="props.labelI18n ? props.labelI18n : undefined"
      :placeholder="props.placeholderI18n ? props.placeholderI18n : undefined"
      :mask="props.mask"
      @input="inputValueChange"
      :rules="myRules"
      :disable="props.disable"
      :lazy-rules="!props.noLazyRules"
      :prefix="props.prefix ? props.prefix : undefined"
      autocomplete="off"
      :reverse-fill-mask="props.reverseFillMask"
      :maxlength="props.maxlength"
      :unmasked-value="props.unmaskedValue"
      :readonly="props.readonly"
      bottom-slots
    >
      <template v-slot:label v-if="props.mandatory">
        <div class="row items-center all-pointer-events">
          {{ props.labelI18n ? props.labelI18n : undefined }}
          <span v-if="props.mandatory" class="required_field">*</span>
        </div>
      </template>

      <template v-slot:append v-if="$slots.append">
        <slot name="append"></slot>
      </template>

      <template v-slot:error v-if="$slots.error">
        <slot name="error"></slot>
      </template>

      <template v-slot:hint v-if="$slots.hint">
        <slot name="hint"></slot>
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from 'vue';
// import { useI18n } from 'vue-i18n';
// import EventBus from 'src/EventBus';
import { ValidationRule } from 'quasar';
// import { hasOnlySpaces } from 'src/utils/validations';
import { QInput } from 'quasar';

interface InputProps {
  titleI18n?: string;
  labelI18n?: string;
  placeholderI18n?: string;
  mask?: string;
  specialRules?: ValidationRule[];
  mandatory?: boolean;
  optional?: boolean;
  disable?: boolean;
  prefix?: string;
  reverseFillMask?: boolean;
  maxlength?: string;
  unmaskedValue?: boolean;
  noLazyRules?: boolean;
  readonly?: boolean;
  conditionalMandatory?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  specialRules: () => [],
  mandatory: false,
  disable: false,
  reverseFillMask: false,
  itleI18n: '',
  noLazyRules: false,
  readonly: false,
  conditionalMandatory: false,
});

// const eventBus = new EventBus();
// const { t } = useI18n();

const inputValue = defineModel();
const inputValueRef = ref();
const myRules = ref<ValidationRule[]>([]);
const currentyMadatoryValue = ref();

function resetValidation() {
  inputValueRef.value.resetValidation();
}

function itHasError() {
  return inputValueRef.value.hasError;
}

function validate() {
  inputValueRef.value.validate();
}

defineExpose({
  resetValidation: resetValidation,
  itHasError: itHasError,
  validate: validate,
});

function inputValueChange() {
  if (inputValue.value) {
    inputValueRef.value.resetValidation();
  }
}

function loadRules() {
  if (props.mandatory) {
    myRules.value = [
      (val) => !!val || 'Campo obrigatório',
      // (val) => !hasOnlySpaces(val) || t('REQUIRED_FIELDS_INPUTS'),
    ];
  } else {
    myRules.value = [];
  }

  if (props.specialRules?.length) {
    if (!myRules.value) {
      myRules.value = [];
    }
    myRules.value = myRules.value.concat(props.specialRules);
  }
}

onMounted(() => {
  loadRules();

  currentyMadatoryValue.value = props.mandatory;
});

watch(props, () => {
  if (props.specialRules != myRules.value) {
    loadRules();
  }

  if (props.mandatory != currentyMadatoryValue.value) {
    loadRules();
    currentyMadatoryValue.value = props.mandatory;
  }
});

// eventBus.subscribe('setLanguage', () => {
//   if (inputValueRef.value?.hasError) {
//     inputValueRef.value.validate();
//   }

//   eventBus.unsubscribe('setLanguage');
// });
</script>

<style lang="scss">
#app-input {
  .q-field__prefix {
    font-weight: bolder !important;
    color: var(--q-primary) !important;
  }

  .q-field__control {
    height: 56px !important;
    min-height: 56px !important;
  }

  .q-field--outlined.q-field--readonly .q-field__control:before {
    border-style: none;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px 4px 0 0;
  }
}
</style>
