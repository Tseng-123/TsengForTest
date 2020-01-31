<template>
    <div>
        <Booktype v-model="bookType" />
    </div>
</template>

<script>
import BookType from './components/BookType'

export default {
    name: 'excel',
    components: { BookType},
    data() {
        return {
            bookType :'xlsx'
        }
    }
}
    
</script>