var vm = new Vue({
    el: "#app",
    data: {
        tabSelect: "auto",
        listBusinessAccount: [
            {
                id: 255697,
                name: 'Account 1'
              },
              {
                id: 582235,
                name: 'Account 2'
              },
              {
                id: 9789564,
                name: 'Account 3'
              },
              {
                id: 524756,
                name: 'Account 4'
              },            
        ],
        listPixelAccount: [
            {
                id: 1,
                parentId: 255697,
                name: 'Pixel 1'
              },
              {
                id: 2,
                parentId: 582235,
                name: 'Pixel 2'
              },
              {
                id: 3,
                parentId: 582235,
                name: 'Pixel 3'
              },
              {
                id: 4,
                parentId: 255697,
                name: 'Pixel 4'
              },
              {
                id: 5,
                parentId: 9789564,
                name: 'Pixel 5'
              },
              {
                id: 6,
                parentId: 255697,
                name: 'Pixel 6'
              },
              {
                id: 7,
                parentId: 582235,
                name: 'Pixel 7'
              },
              {
                id: 8,
                parentId: 9789564,
                name: 'Pixel 8'
              },
              {
                id: 9,
                parentId: 255697,
                name: 'Pixel 9'
              },
              {
                id: 10,
                parentId: 582235,
                name: 'Pixel 10'
              },
              {
                id: 11,
                parentId: 9789564,
                name: 'Pixel 11'
              },
              {
                id: 12,
                parentId: 255697,
                name: 'Pixel 12'
              },            
        ],
        businessAccountSelected: '',
        enableCheckFormAuto: false,
        enableValidateFormManual: false,
        namePixel: '',
        FBIDPixel: '',
    },
    computed: {
      listPixelAccountByBusinessId() {
        const arrResult = []
        for (const value of this.listPixelAccount) {
            if (value.parentId === this.businessAccountSelected) {
                arrResult.push(value)
            }
        }

        return arrResult;
      },
      validateInputNamePixel() {
        if(this.enableValidateFormManual) {
          let check = /^[a-zA-Z]+$/g.exec(this.namePixel);

          return check
        }
      },
      validateInputFBIDPIxel() {
        if(this.enableValidateFormManual) {
          let check = /^[0-9]+$/g.exec(this.FBIDPixel);

          return check;
        }
      }
    },
    watch: {
      tabSelect() {
        if (this.tabSelect === 'auto') {
          this.businessAccountSelected = '';
          this.enableCheckFormAuto = false;
        } else if (this.tabSelect === 'manual') {
          this.namePixel = '';
          this.FBIDPixel = '';
          this.enableValidateFormManual = false;
        }
      }
    },
    methods: {
        enablePixelAccountInput() {
            selectPixelAccountEl = this.$refs.pixelAccountSelect;
            selectPixelAccountEl.disabled = false;
            this.enableCheckFormAuto = true;
        },
        enableValidateManualForm() {
          this.enableValidateFormManual = true;
        },
        resetForm() {
            let businessAccountSelect = this.$refs.businessAccountSelect;
            let pixelAccountSelect = this.$refs.pixelAccountSelect;

            if(this.tabSelect === 'auto') {
                businessAccountSelect.selectedIndex = 0;
                pixelAccountSelect.selectedIndex = 0;
                pixelAccountSelect.disabled = true;
            } else if(this.tabSelect === 'manual') {
                this.namePixel = '';
                this.FBIDPixel = '';
            }
        },
    }
})