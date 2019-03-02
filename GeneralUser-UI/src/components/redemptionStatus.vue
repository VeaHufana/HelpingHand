<template>
    <section>
        <h2 class="title has-text-centered">Redemption Status</h2>
        <div class="container is-fluid">


          <b-table
              :data="isEmpty ? [] : data"
              :mobile-cards="true">

              <template slot-scope="props">
                  <b-table-column field="id" label="ID" width="40" numeric>
                      {{ props.row.id }}
                  </b-table-column>

                  <b-table-column field="item_name" label="Item  Name">
                      {{ props.row.item_name }}
                  </b-table-column>

                  <b-table-column field="points" label="Points">
                      {{ props.row.points }}
                  </b-table-column>

                  <b-table-column field="date" label="Date" centered>
                      <span class="tag">
                          {{ new Date(props.row.date).toLocaleDateString() }}
                      </span>
                  </b-table-column>

                  <b-table-column label="Status">
                      <span class="tag is-info">
                          {{ props.row.status }}
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
                { 'id': 1, 'item_name': 'Rice', 'points': '20', 'date': '2016/10/15 13:43:27', 'status': 'Pending to be Claimed' },
                { 'id': 2, 'item_name': 'Corned Beef', 'points': '15', 'date': '2016/12/15 06:00:53', 'status': 'Pending for Approval' },
                { 'id': 3, 'item_name': '1/4 Sheet of Pad Paper', 'points': '10', 'date': '2016/04/26 06:26:28', 'status': 'Claimed' },
                { 'id': 4, 'item_name': 'Sardines', 'points': '25', 'date': '2016/04/10 10:28:46', 'status': 'Denied' },
                { 'id': 5, 'item_name': 'Bond Paper', 'points': '12', 'date': '2016/12/06 14:38:38', 'status': 'Claimed' }
            ]

            return {
                data
            }
        }
    }
</script>

<style>
  .m2{
    margin-top: 20px;
  }

  .mside{
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
