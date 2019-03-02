<template>
    <section>
        <h2 class="title has-text-centered">Points History</h2>
        <div class="container is-fluid">
        <b-field>
            <div class="control">
                <b-switch v-model="hasMobileCards">Mobile cards</b-switch>
            </div>
        </b-field>

          <b-table
              :data="isEmpty ? [] : data"
              :mobile-cards="hasMobileCards">

              <template slot-scope="props">
                  <b-table-column field="id" label="ID" width="40" numeric>
                      {{ props.row.id }}
                  </b-table-column>

                  <b-table-column field="item_name" label="Item  Name">
                      {{ props.row.item_name }}
                  </b-table-column>

                  <b-table-column label="Quantity">
                      {{ props.row.qty }}
                  </b-table-column>

                  <b-table-column field="points" label="Points">
                      {{ props.row.points }}
                  </b-table-column>

                  <b-table-column field="date" label="Date" centered>
                      <span class="tag is-success">
                          {{ new Date(props.row.date).toLocaleDateString() }}
                      </span>
                  </b-table-column>


              </template>

          </b-table>


        </div>
    </section>
</template>

<script>
    export default {
        data() {
            const data = [
                { 'id': 1, 'item_name': 'Plastic Bottles', 'points': '10', 'date': '2016/10/15 13:43:27', 'qty': '10 kgs' },
                { 'id': 2, 'item_name': 'Paper', 'points': '15', 'date': '2016/12/15 06:00:53', 'qty': '25 kgs' },
                { 'id': 3, 'item_name': 'Glass Bottles', 'points': '10', 'date': '2016/04/26 06:26:28', 'qty': '5 kgs' },
                { 'id': 4, 'item_name': 'Plastic Bottles', 'points': '25', 'date': '2016/04/10 10:28:46', 'qty': '25 kgs' },
                { 'id': 5, 'item_name': 'Cans', 'points': '12', 'date': '2016/12/06 14:38:38', 'qty': '8 kgs' }
            ]

            return {
                data,
                hasMobileCards: true
            }
        }
    }
</script>
