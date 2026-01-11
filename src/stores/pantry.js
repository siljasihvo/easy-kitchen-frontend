import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const usePantryStore = defineStore('pantry', () => {
  const loadFromStorage = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  };
  
  // Storage locations
  const storageLocations = ref([
    { id: 'fridge', name: 'Fridge', emoji: '🧊' },
    { id: 'freezer-1', name: 'Freezer 1', emoji: '❄️' },
    { id: 'freezer-2', name: 'Freezer 2', emoji: '🧊' },
    { id: 'cupboard-1', name: 'Cupboard 1', emoji: '🚪' },
    { id: 'cupboard-2', name: 'Cupboard 2', emoji: '🚪' },
    { id: 'pantry', name: 'Pantry', emoji: '🗄️' }
  ])

  // Categories
  const categories = ref([
    { id: 'meat', name: 'Meat', emoji: '🥩' },
    { id: 'fruit', name: 'Fruit', emoji: '🍎' },
    { id: 'vegetables', name: 'Vegetables', emoji: '🥬' },
    { id: 'canned-food', name: 'Canned Food', emoji: '🥫' },
    { id: 'snacks', name: 'Snacks', emoji: '🍿' },
    { id: 'frozen-food', name: 'Frozen Food', emoji: '🧊' },
    { id: 'dairy', name: 'Dairy', emoji: '🥛' },
    { id: 'grains-pasta', name: 'Grains & Pasta', emoji: '🍝' }
  ])

  // Items
  const items = ref([
    // Meat
    { id: 1, name: 'Chicken Breast', categoryId: 'meat', storageId: 'fridge', quantity: '500g', expiresInDays: -1 },
    { id: 2, name: 'Ground Beef', categoryId: 'meat', storageId: 'fridge', quantity: '400g', expiresInDays: 2 },
    { id: 3, name: 'Chicken Nuggets', categoryId: 'meat', storageId: 'freezer-1', quantity: '1 pack', expiresInDays: 90 },
    { id: 4, name: 'Bitterballen', categoryId: 'meat', storageId: 'freezer-1', quantity: '2 packs', expiresInDays: 60 },
    { id: 5, name: 'Bacon', categoryId: 'meat', storageId: 'fridge', quantity: '150g', expiresInDays: 7 },
    { id: 6, name: 'Salmon', categoryId: 'meat', storageId: 'freezer-1', quantity: '2 fillets', expiresInDays: 120 },
    { id: 7, name: 'Sausage', categoryId: 'meat', storageId: 'fridge', quantity: '1 pack', expiresInDays: 5 },
    
    // Fruit
    { id: 8, name: 'Apples', categoryId: 'fruit', storageId: 'cupboard-2', quantity: '5 units', expiresInDays: 14 },
    { id: 9, name: 'Bananas', categoryId: 'fruit', storageId: 'cupboard-2', quantity: '8 units', expiresInDays: 4 },
    { id: 10, name: 'Kiwi', categoryId: 'fruit', storageId: 'cupboard-2', quantity: '3 units', expiresInDays: 7 },
    { id: 11, name: 'Blueberries', categoryId: 'fruit', storageId: 'fridge', quantity: '250g', expiresInDays: 5 },
    { id: 12, name: 'Strawberries', categoryId: 'fruit', storageId: 'fridge', quantity: '250g', expiresInDays: 3 },
    
    // Vegetables
    { id: 13, name: 'Cucumber', categoryId: 'vegetables', storageId: 'fridge', quantity: '1 unit', expiresInDays: 7 },
    { id: 14, name: 'Bell Pepper', categoryId: 'vegetables', storageId: 'fridge', quantity: '3 units', expiresInDays: 10 },
    { id: 15, name: 'Veggie Mix', categoryId: 'vegetables', storageId: 'freezer-1', quantity: '4 bags', expiresInDays: 180 },
    { id: 16, name: 'Potato', categoryId: 'vegetables', storageId: 'cupboard-2', quantity: '2kg', expiresInDays: 30 },
    { id: 17, name: 'Onion', categoryId: 'vegetables', storageId: 'cupboard-2', quantity: '1 unit', expiresInDays: 21 },
    { id: 18, name: 'Broccoli', categoryId: 'vegetables', storageId: 'fridge', quantity: '3 units', expiresInDays: 5 },
    { id: 19, name: 'Garlic', categoryId: 'vegetables', storageId: 'cupboard-2', quantity: '2 units', expiresInDays: 60 },
    
    // Canned Food
    { id: 20, name: 'Chickpea', categoryId: 'canned-food', storageId: 'cupboard-1', quantity: '2 cans', expiresInDays: 365 },
    { id: 21, name: 'Tuna', categoryId: 'canned-food', storageId: 'cupboard-1', quantity: '5 cans', expiresInDays: 730 },
    { id: 22, name: 'Coconut Milk', categoryId: 'canned-food', storageId: 'cupboard-1', quantity: '1 can', expiresInDays: 400 },
    
    // Snacks
    { id: 23, name: 'Potato Chips', categoryId: 'snacks', storageId: 'pantry', quantity: '1 bag', expiresInDays: 45 },
    { id: 24, name: 'Protein Bar', categoryId: 'snacks', storageId: 'pantry', quantity: '6 units', expiresInDays: 180 },
    { id: 25, name: 'Almond', categoryId: 'snacks', storageId: 'pantry', quantity: '200g', expiresInDays: 90 },
    { id: 26, name: 'Chocolate', categoryId: 'snacks', storageId: 'fridge', quantity: '2 units', expiresInDays: 120 },
    { id: 27, name: 'Hummus', categoryId: 'snacks', storageId: 'fridge', quantity: '1 tub', expiresInDays: 7 },
    
    // Frozen Food
    { id: 28, name: 'Frozen Pizza', categoryId: 'frozen-food', storageId: 'freezer-1', quantity: '4 boxes', expiresInDays: 180 },
    { id: 29, name: 'Vanilla Ice Cream', categoryId: 'frozen-food', storageId: 'freezer-2', quantity: '1L', expiresInDays: 90 },
    { id: 30, name: 'Chocolate Ice Cream', categoryId: 'frozen-food', storageId: 'freezer-2', quantity: '2L', expiresInDays: 90 },
    { id: 31, name: 'Gyoza', categoryId: 'frozen-food', storageId: 'freezer-1', quantity: '1 pack', expiresInDays: 120 },
    { id: 32, name: 'Fries', categoryId: 'frozen-food', storageId: 'freezer-1', quantity: '2 bags', expiresInDays: 150 },
    { id: 33, name: 'Magnum', categoryId: 'frozen-food', storageId: 'freezer-2', quantity: '1 unit', expiresInDays: 180 },
    
    // Dairy
    { id: 34, name: 'Milk', categoryId: 'dairy', storageId: 'fridge', quantity: '1L', expiresInDays: 7 },
    { id: 35, name: 'Butter', categoryId: 'dairy', storageId: 'fridge', quantity: '250g', expiresInDays: 30 },
    { id: 36, name: 'Gouda Cheese', categoryId: 'dairy', storageId: 'fridge', quantity: '400g', expiresInDays: 21 },
    
    // Grains & Pasta
    { id: 37, name: 'Spaghetti', categoryId: 'grains-pasta', storageId: 'cupboard-1', quantity: '1 unit', expiresInDays: 365 },
    { id: 38, name: 'Fusilli', categoryId: 'grains-pasta', storageId: 'cupboard-1', quantity: '3 units', expiresInDays: 365 },
    { id: 39, name: 'Rice', categoryId: 'grains-pasta', storageId: 'cupboard-1', quantity: '5kg', expiresInDays: 730 },
    { id: 40, name: 'Tortilla', categoryId: 'grains-pasta', storageId: 'cupboard-1', quantity: '1 pack', expiresInDays: 14 }
  ])

    watch(items, (newItems) => {
      localStorage.setItem('items', JSON.stringify(newItems));
    }, { deep: true });

    watch(categories, (newCategories) => {
      localStorage.setItem('categories', JSON.stringify(newCategories));
    }, { deep: true });

    watch(storageLocations, (newLocations) => {
      localStorage.setItem('storageLocations', JSON.stringify(newLocations));
    }, { deep: true });

  const itemsByCategory = computed(() => {
    return categories.value.map(category => ({
      ...category,
      items: items.value.filter(item => item.categoryId === category.id)
    }))
  })

  const itemsByStorage = computed(() => {
    return storageLocations.value.map(storage => ({
      ...storage,
      items: items.value.filter(item => item.storageId === storage.id)
    }))
  })

  const expiringSoon = computed(() => {
    return items.value.filter(item => item.expiresInDays <= 7).sort((a, b) => a.expiresInDays - b.expiresInDays)
  })

  function getItemImagePath(item) {
    if (item.customImage) {
      return item.customImage;
    }
    
    const category = categories.value.find(c => c.id === item.categoryId)
    const itemName = item.name.toLowerCase().replace(/\s+/g, '-')
    return `/src/assets/images/${category.name.toLowerCase()}/${itemName}.png`
  }

  function addItem(item) {
    const newId = Math.max(...items.value.map(i => i.id), 0) + 1
    items.value.push({ id: newId, ...item })
  }

  function updateItem(id, updates) {
    const index = items.value.findIndex(item => item.id === id)
    if (index !== -1) {
      items.value[index] = { ...items.value[index], ...updates }
    }
  }

  function deleteItem(id) {
    items.value = items.value.filter(item => item.id !== id)
  }

  return {
    storageLocations,
    categories,
    items,
    
    itemsByCategory,
    itemsByStorage,
    expiringSoon,
    
    getItemImagePath,
    addItem,
    updateItem,
    deleteItem
  }
})