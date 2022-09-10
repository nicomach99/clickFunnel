<script setup lang="ts">
defineProps<{
    show: boolean
}>()
</script>

<template>
    <Transition :duration="1250" name="nested">
        <div v-if="show" class="outer">
            <div class="inner">
                    <div class="title">
                        ¡Gracias por su preferencia!
                    </div>
                    <div class="text">
                        Responde las siguientes preguntas para que te podamos brindar la mejor antención...
                    </div>
            </div>
        </div>
    </Transition>
</template>
    
<style scoped>
.outer, .inner {
    font-family: "Roboto", sans-serif;
    width: 700px;
    height: 300px;
}   
.title {
    font-family: 'Roboto-C';
    text-align: center;
    font-size: xx-large;
    padding-top: 60px
}
.text {
    margin-top: 50px;
    text-align: center;

}
.inner { 
  background-color: black;
}
  
.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>